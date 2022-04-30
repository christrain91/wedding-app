import BootstrapButton from 'react-bootstrap/Button'
interface ButtonProps {
  className?: string
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
  size?: 'sm' | 'lg'
}
const Button = (props: ButtonProps) => {
  return <BootstrapButton
    disabled={props.disabled}
    className={`${props.className} shadow-sm bg-yellow-500 disabled:bg-yellow-800 disabled:shadow-none active:bg-yellow-400 focus:bg-yellow-400 hover:bg-yellow-400 border-none text-gray-100 font-bold`}
    size={props.size}
    variant="primary"
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </BootstrapButton >
}

export default Button