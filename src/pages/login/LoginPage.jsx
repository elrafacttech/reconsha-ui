import { useState } from 'react';
import { User, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router';
import Footer from '../../components/common/footer/Footer';
import Logo from '../../components/common/logo/Logo';

export default function LoginPage() {
    const [step, setStep] = useState('email');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState("");

    const handleContinue = (e) => {
        e.preventDefault();
        if (!email) {
            setError('This field is required');
            return;
        }
        setStep('password');
    };
    const handleLogin = (e) => {
        e.preventDefault();
        if (!password) {
            setError("Password is required.");
            return;
        }
        setError("");
        console.log("Login successful", { email, password });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Logo />

            <main className="flex-1 flex items-center justify-center p-6">
                <Card className="w-full max-w-md">
                    <CardContent className="p-10">
                        {step === 'email' ? (
                            <form
                                onSubmit={handleContinue}
                                className="space-y-6"
                            >
                                <div className="text-center space-y-2">
                                    <h1 className="text-2xl font-semibold font-kanit">
                                     Log in to WorkRiches                                       
                                    </h1>
                                </div>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-2 h-4 w-5 p-0 text-muted-foreground" />
                                        <Input
                                            placeholder="Username or Email"
                                            className={`pl-10 ${error ? 'focus-visible:ring-destructive' : ''}`}
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setError('');
                                            }}
                                        />
                                    </div>
                                    {error && (
                                        <p className="text-sm text-destructive flex items-center gap-2">
                                            <span className="h-1 w-1 rounded-full bg-destructive" />
                                            {error}
                                        </p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary rounded-xl text-primary-foreground"
                                >
                                    Continue
                                </Button>

                                <div className="space-y-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="bg-background px-2 text-muted-foreground">
                                                Don't have an <span className="font-kanit">                                      
                                             WorkRiches</span> account?
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-full flex justify-center items-center">
                                        <Button
                                            variant="outline"
                                            className="w-56 border-primary border-2 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground"
                                            asChild
                                        >
                                            <Link to="/signup">Sign Up</Link>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleLogin} className="space-y-6">
                                <div className="text-center space-y-2">
                                    <h1 className="text-2xl font-semibold">
                                        Welcome
                                    </h1>
                                    <p className="text-muted-foreground">
                                        {email}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-2 h-4 w-5 p-0 text-muted-foreground" />
                                        <Input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                setError("");
                                            }}
                                            className="pl-10"
                                        />
                                    </div>
                                    {error && (
                                        <p className="text-sm text-destructive flex items-center gap-2">
                                            <span className="h-1 w-1 rounded-full bg-destructive" />
                                            {error}
                                        </p>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="remember" />
                                            <Label
                                                htmlFor="remember"
                                                className="text-sm font-light"
                                            >
                                                Keep me logged in
                                            </Label>
                                        </div>
                                        <Button
                                            variant="link"
                                            className="text-primary p-0"
                                            asChild
                                        >
                                            <Link to="/forgot-password">
                                                Forgot password?
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary rounded-xl text-primary-foreground"
                                >
                                    Log in
                                </Button>

                                <div className="text-center">
                                    <Button
                                        variant="link"
                                        className="text-primary p-0"
                                        onClick={() => setStep('email')}
                                    >
                                        Not you?
                                    </Button>
                                </div>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </main>

            <Footer />
        </div>
    );
}
