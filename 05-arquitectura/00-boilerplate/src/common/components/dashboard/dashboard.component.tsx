import React from 'react';
import { cx } from 'emotion';
import { ItemComponent, ClassesProps } from './item.component';
import { DashboardItemProps } from './dashboard.vm';
import * as innerClasses from './dashboard.styles';
import { InsertEmoticonSharp } from '@material-ui/icons';

interface ClassNameProps {
  root?: string;
  items?: string;
  item?: ClassesProps;
}

interface Props {
  items: DashboardItemProps[];
  classes?: ClassNameProps;
}

export const DashboardComponent: React.FC<Props> = props => {
  const { items, classes } = props;

  return (
    <div className={cx(innerClasses.root, classes.root)}>
      <div className={cx(innerClasses.items, classes.items)}>
        {items.map(
          item =>
            Boolean(item) && (
              <ItemComponent
                key={item.title}
                classes={{
                  ...classes.item,
                  root: cx(innerClasses.item, classes.item.root),
                }}
                item={item}
              />
            )
        )}
      </div>
    </div>
  );
};

DashboardComponent.defaultProps = {
  classes: {
    root: '',
    items: '',
    item: {
      root: '',
      icon: '',
      title: '',
    },
  },
};
