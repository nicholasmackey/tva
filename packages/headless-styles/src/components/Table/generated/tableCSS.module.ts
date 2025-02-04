// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  table: {
    borderCollapse: 'separate',
    borderSpacing: '1rem 1px',
    display: 'table',
    fontVariantNumeric: 'lining-nums tabular-nums',
    width: '100%',
  },
  caption: {
    captionSide: 'bottom',
    marginTop: '1rem',
    paddingBottom: '1rem',
    textAlign: 'center',
  },
  headCell: {
    backgroundColor: 'var(--ps-surface-strong)',
    borderBottom: '1px solid var(--ps-border)',
    fontSize: '0.875rem',
    fontVariationSettings: "'wght' 700",
    fontWeight: '700',
    paddingBottom: '0.875rem',
    paddingInlineEnd: '1rem',
    paddingInlineStart: '1rem',
    paddingTop: '0.875rem',
    textAlign: 'start',
  },
  bodyCell: {
    composes: 'headCell',
    backgroundColor: 'var(--ps-surface-weak)',
    borderBottom: 'none',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
  },
  tableRow: {
    '&:hover .bodyCell': {
      backgroundColor: 'var(--ps-surface-medium)',
    },
  },
}
