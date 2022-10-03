import { Link } from 'react-router-dom';

export interface ProductPathProps {
  to: string;
  content: string;
}

export default function ProductPath(props: ProductPathProps) {
  return (
    <Link to={props.to}>
      {props.content.charAt(0).toUpperCase() + props.content.slice(1)}
    </Link>
  );
}
