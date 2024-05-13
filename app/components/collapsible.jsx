import { Button } from "@/components/ui/button"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"

export default function Collapsible() {
  return (
    <Collapsible className="space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Collapsible Content</h4>
        <CollapsibleTrigger asChild>
          <Button size="sm" variant="ghost">
            <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 [&[data-state=open]]:rotate-180" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="rounded-md border border-gray-200 px-4 py-2 font-mono text-sm shadow-sm dark:border-gray-800">
        <p>
          Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
          day, his advisors came to him with a problem: the kingdom was running out of money.
        </p>
        <p>
          The king thought long and hard, and finally came up with a brilliant plan: he would tax the jokes in the
          kingdom.
        </p>
      </CollapsibleContent>
    </Collapsible>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}