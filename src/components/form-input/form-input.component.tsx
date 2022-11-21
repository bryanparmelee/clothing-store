import { InputHTMLAttributes, FC } from 'react';

import {
    FromInputLabel,
    Input,
    Group,
} from './form-input.styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} /> 
            {label && (
                <FromInputLabel 
                    shrink={Boolean(
                        otherProps.value && 
                            typeof otherProps.value === 'string' && 
                            otherProps.value.length
                    )}                    
                >
                    {label}
                </FromInputLabel>
            )}          
        </Group>
    )
}

export default FormInput;