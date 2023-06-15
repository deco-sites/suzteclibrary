import { Matcher } from "$live/blocks/matcher.ts";
import { Section, SectionProps } from "$live/blocks/section.ts";

export default function ByDevice({ section }: SectionProps<typeof loader>) {
  return section && <section.Component {...section.props} />;
}

export interface Props {
  matcher: Matcher;
  section: Section;
}

export const loader = (
  { matcher, section }: Props,
  req: Request,
) => {
  if (matcher && matcher({ request: req })) {
    return { section };
  }
  return { section: null };
};
