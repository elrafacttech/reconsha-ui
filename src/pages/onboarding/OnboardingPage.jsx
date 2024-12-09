import { BriefcaseBusiness, Laptop } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router';
import Logo from '../../components/common/Logo';

export default function OnboardingPage() {
    const [userType, setUserType] = useState('');

    const options = [
        {
            id: 'provider',
            label: ["I'm a", 'Resource', 'Provider'],
            icon: BriefcaseBusiness,
        },
        {
            id: 'finder',
            label: ["I'm a", 'Resource', 'Finder'],
            icon: Laptop,
        },
    ];

    const navigate = useNavigate();
    return (
        <div className="min-h-screen w-full px-4 sm:px-6 md:px-8 mx-auto">
            <Logo />

            <div className="max-w-3xl mx-auto text-center space-y-12">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight">
                    Join as a Resource Provider or Resource Finder
                </h1>

                <RadioGroup
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                    value={userType}
                    onValueChange={setUserType}
                >
                    {options.map(({ id, label, icon: Icon }) => (
                        <div key={id}>
                            <RadioGroupItem
                                id={id}
                                value={id}
                                className="sr-only"
                            />
                            <Label
                                htmlFor={id}
                                className={`flex flex-col items-center sm:items-start justify-center p-6 sm:p-8 border rounded-lg cursor-pointer transition-colors relative ${
                                    userType === id
                                        ? 'border-primary'
                                        : 'hover:border-primary/50'
                                }`}
                                onClick={() => setUserType(id)}
                            >
                                <div
                                    className={`absolute top-4 right-4 w-6 h-6 border-2 rounded-full flex items-center justify-center ${
                                        userType === id
                                            ? 'border-primary bg-primary'
                                            : ''
                                    }`}
                                >
                                    {userType === id && (
                                        <span className="w-3 h-3 bg-primary border border-white rounded-full"></span>
                                    )}
                                </div>
                                <Icon className="w-10 sm:w-12 h-10 sm:h-12 mb-4" />
                                {label.map((text, index) => (
                                    <span key={index} className="text-base sm:text-xl md:text-2xl">
                                        {text}
                                    </span>
                                ))}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>

                <div className="space-y-4">
                    <Button
                        onClick={() => navigate('/signup')}
                        size="lg"
                        variant={userType !== '' ? 'default' : 'secondary'}
                        className={`w-full max-w-40 rounded-xl`}
                    >
                        {userType === 'provider'
                            ? 'Join as Provider'
                            : userType === 'finder'
                              ? 'Join as Finder'
                              : 'Create Account'}
                    </Button>

                    <div className="text-base">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-primary hover:underline"
                        >
                            <Button className="underline" variant="link">
                                {' '}
                                Log In
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
