import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo';

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Logo />

            <main className="flex-1 flex items-center justify-center p-6">
                <Card className="w-full max-w-md">
                    <CardContent className="p-10">
                        <form className="space-y-6">
                            <div className="space-y-6">
                                <h1 className="text-2xl text-center  font-semibold">
                                    Password Recovery
                                </h1>
                                <p className="">
                                    Enter the email address or username
                                    associated with your <span className="font-kanit">                                      
                                    WorkRiches</span> account.
                                </p>
                            </div>

                            <div className="space-y-1">
                                <Label>Email or Username</Label>
                                <Input
                                    type="text"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary rounded-xl text-primary-foreground"
                            >
                                Continue
                            </Button>

                            <div className="text-center">
                                <Link to="/login">
                                    <Button
                                        variant="link"
                                        className="text-primary p-0"
                                    >
                                        Back
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>

            <Footer />
        </div>
    );
}
