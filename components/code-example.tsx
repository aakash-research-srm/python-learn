import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CodeExampleProps {
  title: string
  code: string
  description?: string
  language?: string
}

export function CodeExample({ title, code, description, language = "python" }: CodeExampleProps) {
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
      </CardContent>
    </Card>
  )
}
