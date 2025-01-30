<script setup lang="ts">
import { cn } from '@/lib/utils';

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

            <ShTabs default-value="payment" class="grid max-w-[800px] mx-auto grid-cols-12 gap-2">
                <ShTabsList class="flex flex-col items-stretch col-span-3 justify-start bg-transparent">
                    <ShTabsTrigger value="payment" class="text-wrap text-left">
                        Сколько стоит обучение
                    </ShTabsTrigger>

                    <ShTabsTrigger value="1">
                        ...
                    </ShTabsTrigger>

                    <ShTabsTrigger value="2">
                        ...
                    </ShTabsTrigger>

                    <ShTabsTrigger value="3">
                        ...
                    </ShTabsTrigger>
                </ShTabsList>

                <div class="col-span-9 bg-slate-100 rounded-md px-4 py-2">
                    <ShTabsContent value="payment">
                        ...
                    </ShTabsContent>
                    <ShTabsContent value="1">
                        ...
                    </ShTabsContent>
                    <ShTabsContent value="2">
                        ...
                    </ShTabsContent>
                    <ShTabsContent value="3">
                        ...
                    </ShTabsContent>
                </div>
            </ShTabs>
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
