import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { statusInput } from "../../../types/statusInput"
import { PasswordInputForm } from "./PasswordInputForm"

const onChange =jest.fn()
const status = statusInput.Normal
const value = 'text'
const placeholder = 'Почта'
const width = "24px"
const height = "83px"
const fontSize =  "20px"

describe('test PasswordInput component', () => {
  
    it('render PasswordInput component required props',() => {
        render(<PasswordInputForm 
            onChange={onChange} status={status} 
            value={value} 
            placeholder={placeholder} 
              />)
              const inputElement: HTMLInputElement = screen.getByRole('input')
        expect(inputElement.value).toBe(value)
        expect(inputElement.placeholder).toBe(placeholder)
    })

    it('render PasswordInput component no required props',() => {
        render(<PasswordInputForm 
            onChange={onChange} status={status} 
            value={value} 
            placeholder={placeholder}
            width={width}
            height={height}
            fontSize={fontSize}
              />)
              const inputElement: HTMLInputElement = screen.getByRole('input')
        expect(inputElement.style.width).toBe(width)
        expect(inputElement.style.fontSize).toBe(fontSize)
    })
    it('PasswordInput component with value required true',() => {
        render(<PasswordInputForm 
            onChange={onChange} status={status} 
            value={value} 
            placeholder={placeholder}
            required={true}
              />)
                     
              expect(screen.queryAllByRole('paragraph-required')).toHaveLength(1)
    })

    it('PasswordInput component with value required false',() => {
        render(<PasswordInputForm 
            onChange={onChange} status={status} 
            value={value} 
            placeholder={placeholder}
              />)

        expect(screen.queryAllByRole('paragraph-required')).toHaveLength(0)
    })
    it('PasswordInputForm component with statis Error',() => {
        render(<PasswordInputForm 
            onChange={onChange} status={statusInput.Error} 
            value={value} 
            placeholder={placeholder}
              />)

        expect(screen.queryAllByRole('input')).toHaveLength(1)
    })
    it('PasswordInputForm component with statis Rigth',() => {
        render(<PasswordInputForm 
            onChange={onChange} status={statusInput.Rigth} 
            value={value} 
            placeholder={placeholder}
              />)

        expect(screen.queryAllByRole('input')).toHaveLength(1)
    })

    it('PasswordInput component event onChange',() => {
        const change = jest.fn()
        render(<PasswordInputForm 
            onChange={change}
            status={status} 
            value={value} 
            placeholder={placeholder}
              />)
              const inputElement: HTMLInputElement = screen.getByRole('input')
            fireEvent.change(inputElement, {target: {value: 'test'}})
            fireEvent.change(inputElement, {target: {value: 'test'}})
        expect(change.mock.calls).toHaveLength(2)
    })
    it('PasswordInput component change state',() => {
        render(<PasswordInputForm 
            onChange={onChange}
            status={status} 
            value={value} 
            placeholder={placeholder}
              />)
              const inputElement: HTMLInputElement = screen.getByRole('input')
              const textElement: HTMLElement = screen.getByRole('paragraph-toggle')
        expect(inputElement.type).toBe('password')
        expect(textElement.textContent).toBe('Показать')
        fireEvent.click(textElement)
        expect(inputElement.type).toBe('text')
        expect(textElement.textContent).toBe('Спрятать')
        fireEvent.click(textElement)
        expect(inputElement.type).toBe('password')
        expect(textElement.textContent).toBe('Показать')

    })
})