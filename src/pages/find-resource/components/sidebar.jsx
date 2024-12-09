import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ChevronDown, ExternalLink } from 'lucide-react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useToggle } from '@/hooks/use-toggle';
import { Badge } from '@/components/ui/badge';

export function Sidebar() {
    const [isProposalCollapsed, proposalCollapse] = useToggle();
    const [isTagsCollapsed, tagsCollapse] = useToggle();

    return (
        <aside className="space-y-6">
            <div className="flex items-center gap-4">
                <img
                    src="https://via.placeholder.com/48x48.png?text=Profile"
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
                <div>
                    <h2 className="font-semibold">Midlaj</h2>
                    <p className="text-sm text-muted-foreground">
                        Spring Boot | React | Java
                    </p>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        className="text-sm text-primary hover:underline"
                    >
                        Complete your profile
                    </a>
                    <span className="text-sm">100%</span>
                </div>
                <Progress value={100} className="mt-2" />
            </div>

            <Collapsible open={isTagsCollapsed} onOpenChange={tagsCollapse}>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                        <span>Tags : 32</span>
                        <ChevronDown
                            className={`h-4 w-4 transform transition duration-200 ease-in-out ${isTagsCollapsed ? 'rotate-180' : ''}`}
                        />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="mt-2 space-y-2 pl-4">
                        <Badge variant="secondary">Java</Badge>
                        <Badge variant="secondary">Spring Boot</Badge>
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">JavaScript</Badge>
                    </div>
                </CollapsibleContent>
            </Collapsible>

            <Collapsible
                open={isProposalCollapsed}
                onOpenChange={proposalCollapse}
            >
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between">
                        <span>Proposals</span>
                        <ChevronDown
                            className={`h-4 w-4 transform transition duration-200 ease-in-out ${isProposalCollapsed ? 'rotate-180' : ''}`}
                        />
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="mt-2 space-y-2 pl-4">
                        <a
                            href="#"
                            className="text-sm text-primary hover:underline block"
                        >
                            My Proposals
                        </a>
                        <a
                            href="#"
                            className="text-sm text-primary hover:underline block"
                        >
                            2 active Resources
                        </a>
                        <a
                            href="#"
                            className="text-sm text-primary hover:underline block"
                        >
                            10 submitted proposals
                        </a>
                    </div>
                </CollapsibleContent>
            </Collapsible>

            <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-between">
                    <span>Resources Academy</span>
                    <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                    <span>Direct Contracts</span>
                    <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                    <span>Get Paid</span>
                    <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                    <span>Community & Forums</span>
                    <ExternalLink className="h-4 w-4" />
                </Button>
            </div>
        </aside>
    );
}
