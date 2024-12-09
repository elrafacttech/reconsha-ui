'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function EditTitleDialog({ open, onOpenChange, title, onSave }) {
    const [value, setValue] = useState(title);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-3xl font-medium">
                        Edit your title
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-5">
                    <p className="text-gray-600 text-base">
                        Enter a single sentence description of your company
                    </p>

                    <div className="space-y-2">
                        <Label className="text-base">Your title</Label>

                        <Input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Title"
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-8">
                        <Button
                            variant="ghost"
                            className="text-primary hover:text-primary/90 rounded-xl"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="rounded-xl"
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
