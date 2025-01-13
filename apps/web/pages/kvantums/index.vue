<template>
    <div>
        <Section>
            <SectionContainer>
                <SectionHeading>
                    Квантумы
                </SectionHeading>

                <ul class="grid grid-cols-1 gap-2 lg:grid-cols-3">
                    <KvantumListProvider #="{ kvantums }">
                        <li v-for="kvantum in kvantums" :key="kvantum._id">
                            <KvantumCard :kvantum="kvantum" />
                        </li>
                    </KvantumListProvider>
                </ul>
            </SectionContainer>
        </Section>
    </div>
</template>
