import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors, IExtendedCellProps, withCellLoading } from '../../../design-system';
import type { ITableIntegration } from '../types';

const StatusHolder = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  color: ${colors.success};

  &[data-disabled='true'] {
    color: ${colors.B40};
  }
`;

const StatusIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
`;

const StatusName = styled.span`
  font-size: 14px;
`;

const STATUS_TO_ICON = {
  Active: 'bolt',
  Disabled: 'bolt',
};

const IntegrationStatus = ({ row: { original } }: IExtendedCellProps<ITableIntegration>) => {
  const status = original.active ? 'Active' : 'Disabled';

  return (
    <StatusHolder data-disabled={status === 'Disabled'} data-test-id="integration-status-cell">
      <StatusIcon icon={STATUS_TO_ICON[status] as any} />
      <StatusName>{status}</StatusName>
    </StatusHolder>
  );
};

export const IntegrationStatusCell = withCellLoading(IntegrationStatus, {
  loadingTestId: 'integration-status-cell-loading',
});
