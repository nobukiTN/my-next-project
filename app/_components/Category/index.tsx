import type { Category } from '@/app/_libs/microcms';
import styles from './index.module.css';

type Props = {
  category: Category;
};
export default function Category({ category }: Props) {
  if (!category) {
    return <span className={styles.tag}>カテゴリなし</span>;
  }
  return <span className={styles.tag}>{category.name}</span>;
}
