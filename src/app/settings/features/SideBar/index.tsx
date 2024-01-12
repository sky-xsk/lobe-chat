import { DraggablePanelBody } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import FolderPanel from '@/features/FolderPanel';

import UpgradeAlert from '../UpgradeAlert';
import List from './List';

const useStyles = createStyles(({ stylish, token, css }) => ({
  body: stylish.noScrollbar,
  logo: css`
    fill: ${token.colorText};
    font-size: 24px
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const SideBar = memo(() => {
  const { styles } = useStyles();

  return (
    <FolderPanel>
      <DraggablePanelBody className={styles.body} style={{ padding: 0 }}>
        <Flexbox className={styles.top} padding={16}>
          <div className={styles.logo}>
            ChatKore
          </div>
        </Flexbox>
        <Flexbox gap={2} style={{ paddingInline: 8 }}>
          <UpgradeAlert />
          <List />
        </Flexbox>
      </DraggablePanelBody>
    </FolderPanel>
  );
});

export default SideBar;
