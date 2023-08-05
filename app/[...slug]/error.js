"use client";

import PageContainer from "@/components/PageContainer";
import Main from "@/components/Main";
import Title from "@/components/Title";
import Description from "@/components/Description";
import Link from "next/link";

export default function Error({ reset, error }) {
  return (
    <PageContainer>
      <Main>
        <Title>
          try go to the{" "}
          <Link href="/" className="hover:underline">
            home page
          </Link>
        </Title>
        <Description>it looks like something went wrong</Description>
      </Main>
    </PageContainer>
  );
}
