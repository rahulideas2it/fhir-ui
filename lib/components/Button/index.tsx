import styles from './styles.module.css';
import MUIButton from '@mui/material/Button';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className } = props;
  return (
    <MUIButton
      variant="contained"
      className={`${className} ${styles.button}`}
    />
  );
}
