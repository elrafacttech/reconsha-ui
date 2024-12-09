import { SearchBar } from './components/search-bar';
import { ResourceCard } from './components/resource-card';
import { Sidebar } from './components/sidebar';
import { HeroCarousel } from './components/hero-carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function FindResourcePage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container max-w-screen-xl mx-auto px-4 py-6 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[1fr,300px]">
                    <main className="space-y-6">
                        <HeroCarousel />
                        <SearchBar />
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">
                                Resources you might like
                            </h2>

                            <Tabs defaultValue="best-matches">
                                <TabsList className="bg-transparent border-b-2 rounded-none">
                                    <TabsTrigger
                                        value="best-matches"
                                        className="data-[state=active]:text-primary data-[state=active]:border-b-2 border-primary rounded-none"
                                    >
                                        Best Matches
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="most-recent"
                                        className="data-[state=active]:text-primary data-[state=active]:border-b-2 border-primary rounded-none"
                                    >
                                        Most Recent
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="saved"
                                        className="data-[state=active]:text-primary data-[state=active]:border-b-2 border-primary rounded-none"
                                    >
                                        Saved Resources
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="best-matches">
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Browse Resources that match your
                                        experience to a client's hiring
                                        preferences. Ordered by most relevant
                                    </p>
                                    <ResourceCard />
                                </TabsContent>
                                <TabsContent value="most-recent">
                                    <ResourceCard />
                                </TabsContent>
                                <TabsContent value="saved">
                                    <ResourceCard />
                                </TabsContent>
                            </Tabs>
                        </div>
                    </main>

                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
