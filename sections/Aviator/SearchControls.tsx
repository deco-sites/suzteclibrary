import SearchControls from "$store/islands/SearchControls.tsx";

import type { LoaderReturnType, SectionProps } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return <div />;
}

function SearchControlsSection(
  { page, headingText, context }: SectionProps<typeof loader>,
) {
  if (!page || !page.filters || page.filters.length === 0) {
    return <NotFound />;
  }

  const { filters, breadcrumb } = page;
  const pageType = breadcrumb.itemListElement.length == 1
    ? "department"
    : "category";

  return (
    <SearchControls
      filters={filters}
      headingText={headingText}
      context={context}
      pageType={pageType}
    />
  );
}

export const loader = ({ page }: Props, req: Request) => {
  const url = new URL(req.url);

  if (new URLPattern({ pathname: "/s" }).test(url)) {
    return {
      page,
      headingText: url.searchParams.get("q") ?? "",
      context: "search" as const,
    };
  }

  if (new URLPattern({ pathname: "/wishlist" }).test(url)) {
    return {
      page,
      context: "wishlist" as const,
    };
  }

  const headingText =
    new URLPattern({ pathname: "/*/:last" }).exec(url)?.pathname.groups.last;

  return {
    page,
    headingText,
    context: "plp" as const,
  };
};

export default SearchControlsSection;
