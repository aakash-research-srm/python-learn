import { NextRequest, NextResponse } from "next/server"
import { exec } from "child_process"
import { promisify } from "util"
import fs from "fs/promises"
import path from "path"
import { v4 as uuidv4 } from "uuid"

const execAsync = promisify(exec)

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()
    
    if (!code || typeof code !== "string") {
      return NextResponse.json({ error: "Invalid code provided" }, { status: 400 })
    }

    // Create a temporary file with unique name
    const tempDir = path.join(process.cwd(), "temp")
    await fs.mkdir(tempDir, { recursive: true })
    
    const filename = `temp_${uuidv4()}.py`
    const filepath = path.join(tempDir, filename)
    
    try {
      // Write code to temporary file
      await fs.writeFile(filepath, code)
      
      // Execute Python code with timeout
      const { stdout, stderr } = await execAsync(`python "${filepath}"`, {
        timeout: 10000, // 10 second timeout
        cwd: tempDir
      })
      
      // Clean up temporary file
      await fs.unlink(filepath)
      
      if (stderr) {
        return NextResponse.json({ error: stderr }, { status: 200 })
      }
      
      return NextResponse.json({ output: stdout }, { status: 200 })
      
    } catch (execError: any) {
      // Clean up temporary file in case of error
      try {
        await fs.unlink(filepath)
      } catch {}
      
      if (execError.killed && execError.signal === 'SIGTERM') {
        return NextResponse.json({ error: "Code execution timed out (10 seconds limit)" }, { status: 200 })
      }
      
      return NextResponse.json({ 
        error: execError.stderr || execError.message || "Code execution failed" 
      }, { status: 200 })
    }
    
  } catch (error: any) {
    console.error("Python execution error:", error)
    return NextResponse.json({ 
      error: "Server error: " + (error.message || "Unknown error") 
    }, { status: 500 })
  }
}
