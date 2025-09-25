'use client';

import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
  loading: () => <div>Loading editor...</div>,
});

interface SimpleMDEWrapperProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const SimpleMDEWrapper = ({
  placeholder,
  value,
  onChange,
}: SimpleMDEWrapperProps) => {
  return (
    <SimpleMDE placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default SimpleMDEWrapper;
