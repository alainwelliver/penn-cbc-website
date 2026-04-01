export const PENN_CBC_LINKS = {
  website: "https://www.penncbc.com/",
  signUp: "https://www.jotform.com/253555944387168",
  joinFoundry: "https://forms.gle/UUs8KEcqgH9Hggo76",
  joinSlack:
    "https://join.slack.com/t/penncbc/shared_invite/zt-3t1xgaghv-ajvfnvf_~mtqufP_4Ri2FQ",
  linkedIn: "https://www.linkedin.com/company/cbcatpenn",
  instagram: "https://www.instagram.com/penncbc/",
  email: "mailto:penncbc@gmail.com",
  newsletter:
    "https://magic.beehiiv.com/v1/38c57aa9-08ce-4517-9e3b-0e043bee3279?email=%7B%7Bemail%7D%7D",
} as const;

export const PENN_CBC_PRIMARY_LINKS = [
  {
    href: PENN_CBC_LINKS.signUp,
    label: 'Sign Up',
    eventName: 'cta_sign_up_click',
    kind: 'primary',
  },
  {
    href: PENN_CBC_LINKS.joinSlack,
    label: 'Join Slack',
    eventName: 'cta_join_slack_click',
    kind: 'secondary',
  },
  {
    href: PENN_CBC_LINKS.joinFoundry,
    label: 'Join Foundry',
    eventName: 'cta_join_foundry_click',
    kind: 'secondary',
  },
  {
    href: PENN_CBC_LINKS.newsletter,
    label: 'Subscribe to Newsletter',
    eventName: 'cta_newsletter_click',
    kind: 'secondary',
  },
  {
    href: PENN_CBC_LINKS.website,
    label: 'Visit Our Website',
    eventName: 'cta_website_click',
    kind: 'secondary',
  },
] as const;

export const PENN_CBC_SOCIAL_LINKS = [
  {
    href: PENN_CBC_LINKS.instagram,
    label: 'Instagram',
    eventName: 'social_instagram_click',
  },
  {
    href: PENN_CBC_LINKS.linkedIn,
    label: 'LinkedIn',
    eventName: 'social_linkedin_click',
  },
  {
    href: PENN_CBC_LINKS.email,
    label: 'Email',
    eventName: 'social_email_click',
  },
] as const;

export const PENN_CBC_LINKTREE_COPY = {
  title: "Claude Builder Club at Penn",
  subtitle: "Learn, build, and connect with the Penn CBC community.",
} as const;
