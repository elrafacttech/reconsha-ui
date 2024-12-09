import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Pencil, Share2, Link2, BadgeCheck, MapPin, Share } from 'lucide-react';
import { EditTitleDialog } from './components/edit-title-dialog';
import { EditOverviewDialog } from './components/edit-overview-dialog';
import { ShareDialog } from './components/share-dialog';
import EditPhotoDialog from './components/edit-photo-dialog';

export default function ProfilePage() {
    const [isEditTitleOpen, setIsEditTitleOpen] = useState(false);
    const [isEditOverviewOpen, setIsEditOverviewOpen] = useState(false);
    const [isEditPhotoOpen, setIsEditPhotoOpen] = useState(false);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [title, setTitle] = useState('Company Name');
    const [overview, setOverview] = useState(
        'As a seasoned full-stack developer in Information Technology, I have 10+ years of experience in Java full-stack development, DevOps and Web Development. I pride myself on being a smart worker who can carry out heavy workloads in an intelligent manner. My skills are Java, Thymeleaf, JSP, Spring MVC, Spring Boot, Lombok Spring Cloud, Spring Hystrix, Spring Gateway,Spring Batch, Spring Eureka, Junit, Spring Mockito, Hibernate, DB2, Oracle SQL, PL/SQL, MySQL, MongoDB, NoSQL, Cassandra, Angular JS, React JS, HTML, WordPress, Bootstrap, Jira, JavaScript, AWS (EC2, CI/CD PipeLine, SNS, S3, Lambda, CloudWatch, ECS, EKS), Azure (ACS, AKS, DevOps), Micro Services, SVN, Git, etc.'
    );

    return (
        <div className="min-h-screen">
            <Card className="max-w-7xl mx-auto my-8">
                <div className="py-7">
                    <div className="flex items-start gap-5 p-7 border-b">
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/100x100.png?text=Profile"
                                alt="Profile"
                                width={100}
                                height={100}
                                className="rounded-full"
                            />

                            <div className="absolute rounded-full bg-primary h-3 w-3 top-2 left-2" />
                            <Button
                                size="icon"
                                variant="outline"
                                className="absolute rounded-full border-2 border-primary -bottom-2 -right-2"
                                onClick={() => setIsEditPhotoOpen(true)}
                            >
                                <Pencil className="h-4 w-4 text-primary" />
                            </Button>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-3xl font-semibold">
                                        {title}
                                    </h1>
                                    <BadgeCheck className="size-7 text-white fill-blue-600" />
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            window.open('/public-view')
                                        }
                                        className="border-primary rounded-xl text-primary hover:text-primary/90"
                                    >
                                        See public view
                                    </Button>
                                    <Button className="rounded-xl">
                                        Profile settings
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-2 text-gray-600 flex items-center gap-2">
                                <MapPin className="size-4" />
                                <span>
                                    Coimbatore, India — 7:47 pm local time
                                </span>
                            </div>

                            <div className="w-full flex justify-end">
                                <Button
                                    variant="ghost"
                                    className="gap-2 text-base text-primary hover:text-primary/90"
                                    onClick={() => setIsShareOpen(true)}
                                >
                                    Share
                                    <Share className="size-6" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="grid grid-cols-2 gap-4 w-2/5 p-7 border-r">
                            <div>
                                <div className="text-2xl">$100+</div>
                                <div className="text-gray-600">Total Spend</div>
                            </div>
                            <div>
                                <div className="text-2xl">1</div>
                                <div className="text-gray-600">
                                    Total Resources
                                </div>
                            </div>
                        </div>

                        <div className="w-full p-7 space-y-5">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center justify-start gap-3">
                                    <h2 className="text-xl font-semibold">
                                        {title}
                                    </h2>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="rounded-full border-2 border-primary"
                                        onClick={() => setIsEditTitleOpen(true)}
                                    >
                                        <Pencil className="h-4 w-4 text-primary" />
                                    </Button>
                                </div>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="gap-2 border-2 border-primary hover:text-primary/90 text-primary rounded-full"
                                >
                                    <Link2 className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="flex justify-start gap-2 w-full">
                                <p className="text-gray-600 whitespace-pre-wrap w-full">
                                    {overview}
                                </p>

                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="rounded-full min-h-max min-w-max border-primary border-2"
                                    onClick={() => setIsEditOverviewOpen(true)}
                                >
                                    <Pencil className="h-4 w-4 text-primary" />
                                </Button>
                            </div>

                            <span className="text-primary hover:underline cursor-pointer">
                                more
                            </span>
                        </div>
                    </div>
                </div>
            </Card>

            <EditTitleDialog
                open={isEditTitleOpen}
                onOpenChange={setIsEditTitleOpen}
                title={title}
                onSave={setTitle}
            />
            <EditOverviewDialog
                open={isEditOverviewOpen}
                onOpenChange={setIsEditOverviewOpen}
                overview={overview}
                onSave={setOverview}
            />
            <EditPhotoDialog
                open={isEditPhotoOpen}
                onOpenChange={setIsEditPhotoOpen}
            />
            <ShareDialog open={isShareOpen} onOpenChange={setIsShareOpen} />
        </div>
    );
}
