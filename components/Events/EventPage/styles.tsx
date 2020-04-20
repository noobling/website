import { css } from '@emotion/core'
import { media } from '../../../lib/mediaQueries'

export const styles = (theme, url) => css`
  .text {
    font-size: 0.8rem;
    line-height: 1.3;
  }
  ${media.sm`
    .event-head {
      width: 75%;
    }
  `}
  ${media.md`
    .text {
      width: 90%;
    }
    .event-main-head {
      width: 75%;
    }
    .event-head {
      width: 50%;
    }
    .workshop-border {
      border-left: 1rem solid ${theme.colors.secondary};
    }
  `}
`
