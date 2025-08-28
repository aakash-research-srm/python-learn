import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


interface CodeExampleProps {
  title: string
  code: string
  description?: string
  language?: string
  codeOutput?: string
}

export function CodeExample({ title, code, description, language = "python", codeOutput }: CodeExampleProps) {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="outline" className="font-mono text-xs">
            {language}
          </Badge>
        </div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <pre className="bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm font-mono border border-slate-800">
          <code>{code}</code>
        </pre>
        {codeOutput && (
          <div className="mt-4">
            <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 rounded-t-lg">
              <span className="text-sm font-medium text-slate-300">Output:</span>
            </div>
            <pre className="bg-slate-950 text-slate-100 p-4 rounded-b-lg overflow-x-auto text-sm font-mono border border-slate-800">
              <code>{codeOutput}</code>
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
