import { LucideIcon } from 'lucide-react';

export interface Technology {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  gradient: string;
  stats: {
    label: string;
    value: string;
    icon: LucideIcon;
  }[];
  demo: {
    type: string;
    color: string;
  };
}