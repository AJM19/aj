import styled from 'styled-components';
import { fontFamily, fontSize, motion, space, weight } from '../styles/tokens';

const TIMELINE = [
  {
    org: 'Arccos Golf',
    role: 'Senior Software Engineer',
    period: '2026 — present',
    stack: ['React', 'TypeScript', 'Node'],
    href: 'https://www.arccosgolf.com/',
  },
  {
    org: 'Golf PDI',
    role: 'Lead Developer',
    period: '2022 — 2026',
    stack: ['React', 'TypeScript', 'Node'],
    href: 'https://golfpdi.com/',
  },
  {
    org: 'Capgemini',
    role: 'Software Engineer',
    period: '2021 — 2022',
    stack: ['Angular', 'TypeScript'],
  },
  {
    org: 'University of Miami',
    role: 'B.S. Computer Science · Game Design + Criminology minors',
    period: '2017 — 2021',
    stack: ['Java', 'C++'],
  },
];

const Journey = () => {
  return (
    <List>
      {TIMELINE.map((entry) => {
        const Wrap = entry.href ? RowExternal : RowStatic;
        return (
          <Wrap
            key={entry.org}
            {...(entry.href
              ? { href: entry.href, target: '_blank', rel: 'noreferrer' }
              : {})}
          >
            <Period>{entry.period}</Period>
            <Body>
              <Org>
                {entry.org}
                {entry.href && <ExternalMark>↗</ExternalMark>}
              </Org>
              <Role>{entry.role}</Role>
            </Body>
            <Stack>
              {entry.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </Stack>
          </Wrap>
        );
      })}
    </List>
  );
};

export default Journey;

const List = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.rule};
`;

const rowStyles = `
  display: grid;
  grid-template-columns: 200px 1fr auto;
  gap: 24px;
  padding: 24px 0;
  align-items: baseline;
`;

const RowStatic = styled.div`
  ${rowStyles};
  border-bottom: 1px solid ${({ theme }) => theme.rule};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

const RowExternal = styled.a`
  ${rowStyles};
  border-bottom: 1px solid ${({ theme }) => theme.rule};
  color: ${({ theme }) => theme.fg};
  transition: color ${motion.base} ${motion.ease};

  &:hover {
    color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

const Period = styled.div`
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${space['0_5']};
`;

const Org = styled.div`
  font-family: ${fontFamily.display};
  font-size: ${fontSize['2xl']};
  font-weight: ${weight.semibold};
  letter-spacing: -0.02em;
  display: inline-flex;
  align-items: baseline;
  gap: ${space['1']};
`;

const ExternalMark = styled.span`
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
`;

const Role = styled.div`
  font-size: ${fontSize.sm};
  color: ${({ theme }) => theme.fgMuted};
`;

const Stack = styled.div`
  display: flex;
  gap: ${space['1']};
  flex-wrap: wrap;

  @media (max-width: 640px) {
    margin-top: ${space['1']};
  }
`;

const Tag = styled.span`
  font-family: ${fontFamily.mono};
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.fgMuted};
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.rule};
`;
