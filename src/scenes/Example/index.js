import React from 'react';
import { inject, observer } from 'mobx-react';

import styles from './styles.less';

const ExampleScene = ({ ui }) => (
  <div className={styles.container}>
    <span className={styles.text}>Example Scene</span>
    <span className={styles.text}>App loading: { ui.loading.toString() }</span>
  </div>
);

export default inject('ui')(observer(ExampleScene));
