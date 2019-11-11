import * as React from 'react';
import 'react-quill/dist/quill.snow.css';
import { HeightProps } from 'styled-system';
import { ComponentProps } from 'react-quill';
export interface ITextEditorProps extends HeightProps, ComponentProps {
}
export declare const TextEditor: React.FunctionComponent<ITextEditorProps>;
