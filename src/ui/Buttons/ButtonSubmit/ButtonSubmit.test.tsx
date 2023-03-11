import { fireEvent, render, screen } from "@testing-library/react"
import { ButtonSubmit } from "./ButtonSubmit"

const click = jest.fn()
const text: string = 'доступ'
const width: string = '200px'
const color: string = 'red'
const fontSize: string = '20px'
describe('test TextButton component', () => {
    it('render TextButton component' , () => {
        render(<ButtonSubmit 
            click={click} 
            width={width} 
            text={text} 
            color={color} 
            fontSize={fontSize}/>)
        const buttonElement: HTMLButtonElement = screen.getByRole('submit')
        expect(buttonElement.textContent).toBe(text)
        expect(buttonElement.style.width).toBe(width)
        expect(buttonElement.style.fontSize).toBe(fontSize)
        expect(buttonElement.style.color).toBe(color)
    })
    it('TextButton component event onClick' , () => {
        const click = jest.fn()
        render(<ButtonSubmit 
            click={click} 
            width={width} 
            text={text} 
            color={color} 
            fontSize={fontSize}/>)
        const buttonElement: HTMLButtonElement = screen.getByRole('submit')
        fireEvent.click(buttonElement)
        fireEvent.click(buttonElement)
        expect(click.mock.calls).toHaveLength(2)
    })
})