<script setup lang="ts">
import { cn } from '../../lib/utils'
</script>

<template>
    <Section
        :class="cn([
            `relative

            after:absolute after:-z-10
            after:top-0 after:bottom-0
            after:right-0 after:left-0

            after:pointer-events-none

            after:rounded-tr-3xl
            after:pt-0.5 after:pr-0.5
            after:mr-2 lg:after:mr-3

            after:from-slate-200 after:to-transparent after:bg-gradient-to-b`,
            $style['faq-mask'],
        ])
        "
    >
        <SectionContainer>
            <SectionHeading>
                Часто задаваемые вопросы
            </SectionHeading>

            <div class="mx-auto max-w-[600px]">
                <FaqAccordion>
                    <FaqAccordionItem title="Это бесплатно" value="item-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi.
                    </FaqAccordionItem>

                    <FaqAccordionItem title="Это бесплатно" value="item-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi.
                    </FaqAccordionItem>

                    <FaqAccordionItem title="Это бесплатно" value="item-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi.
                    </FaqAccordionItem>

                    <FaqAccordionItem title="Это бесплатно" value="item-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi.
                    </FaqAccordionItem>
                </FaqAccordion>
            </div>
        </SectionContainer>
    </Section>
</template>

<style module>
.faq-mask::after {
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}
</style>
