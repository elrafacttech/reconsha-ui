'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export function EditOverviewDialog({ open, onOpenChange, overview, onSave }) {
    const [value, setValue] = useState(overview);
    const maxLength = 4000;
    const remainingChars = maxLength - value.length;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-3xl">
                        Profile overview
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <p className="text-muted-foreground">
                            Use this space to show clients you have the skills
                            and experience they're looking for.
                        </p>
                        <ul className="list-disc pl-4 text-sm text-muted-foreground">
                            <li>Describe your strengths and skills</li>
                            <li>
                                Highlight projects, accomplishments and
                                education
                            </li>
                            <li>Keep it short and make sure it's error-free</li>
                        </ul>
                        <a href="#" className="text-primary text-sm">
                            Learn more about building your profile
                        </a>
                    </div>
                    <Textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="min-h-[200px]"
                        maxLength={maxLength}
                    />
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{remainingChars} characters left</span>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button
                            variant="ghost"
                            className="text-primary hover:text-primary/90"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => {
                                onSave(value);
                                onOpenChange(false);
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
