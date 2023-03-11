import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { statusInput } from "../../../types/statusInput"
import { InputForm } from "./InputForm"

const onChange =jest.fn()
const status = statusInput.Normal
const value = 'text'
const placeholder = 'Почта'
const width = "24px"
const height = "83px"
const fontSize =  "20px"

describe('test InputForm component', () => {
  
    it('render InputForm component required props',() => {
        render(<InputForm 
            onChange={onChange} status={status} 
            value={value} 
            placeholder={placeholder} 
              />)
              const inputElement: HTMLInputElement = screen.getByRole('input')
        expect(inputElement.value).toBe(value)
        expect(inputElement.placeholder).toBe(placeholder)
    })

    it('render InputForm component no required props',() => {
        render(<InputForm 
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
    it('InputForm component with value required true',() => {
        render(<InputForm 
            onChange={onChange} status={status} 
            value={value} 
            placeholder={placeholder}
            required={true}
              />)
                     
              expect(screen.queryAllByRole('paragraph-required')).toHaveLength(1)
    })

    it('InputForm component with value required false',() => {
        render(<InputForm 
            onChange={onChange} status={status} 
            value={value} 
            placeholder={placeholder}
              />)

        expect(screen.queryAllByRole('paragraph-required')).toHaveLength(0)
    })

    it('InputForm component with statis Error',() => {
        render(<InputForm 
            onChange={onChange} status={statusInput.Error} 
            value={value} 
            placeholder={placeholder}
              />)

        expect(screen.queryAllByRole('input')).toHaveLength(1)
    })
    it('InputForm component with statis Rigth',() => {
        render(<InputForm 
            onChange={onChange} status={statusInput.Rigth} 
            value={value} 
            placeholder={placeholder}
              />)

        expect(screen.queryAllByRole('input')).toHaveLength(1)
    })
    it('InputForm component event onChange',() => {
        const change = jest.fn()
        render(<InputForm 
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

})