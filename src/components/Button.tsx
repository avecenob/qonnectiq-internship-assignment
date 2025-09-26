interface Props {
	children: string;
	color?: string;
}

const Button = ({ children, color = 'primary' }: Props) => {
  return (
    <button className={'btn btn-' + color}>{children}</button>
  )
};

export default Button;
