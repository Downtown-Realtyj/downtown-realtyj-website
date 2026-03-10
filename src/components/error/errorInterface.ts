import { ReactNode } from 'react';

export interface ErrorIllustrationProps {
  type: '404' | '500';
  className?: string;
}

export interface ErrorPageLayoutProps {
  errorCode: string;
  heading: string;
  description: string;
  children: ReactNode;
  illustration: ReactNode;
}

