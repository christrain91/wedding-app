
interface ButtonProps {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
  size?: 'sm' | 'lg'
}
const Button = (props: ButtonProps) => {
  const className = 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm disabled:bg-yellow-800 text-white bg-yellow-500 active:bg-yellow-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400'
    return <button disabled={props.disabled} type={props.type} onClick={props.onClick} className={className}>Post</button>
}

export default Button