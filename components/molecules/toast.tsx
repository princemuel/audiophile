type C = 'center';
type X = 'left' | 'right';
type Y = 'top' | 'bottom';

type ToastProps = {
  position:
    | `${Y}-${X}`
    | Exclude<`${C}-${Y}` | `${C}-${X}`, 'center-center'>
    | 'center';
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

export { Toast };
