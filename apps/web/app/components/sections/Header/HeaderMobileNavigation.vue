<template>
    <ShSidebar>
        <ShSidebarContent>
            <ShSidebarGroup>
                <ShSidebarMenu>
                    <ShSidebarMenuItem>
                        <NuxtLink to="/about">
                            О нас
                        </NuxtLink>

                        <ShSidebarMenuSub>
                            <ShSidebarMenuSubItem>
                                <NuxtLink to="/team/">
                                    Команда
                                </NuxtLink>
                            </ShSidebarMenuSubItem>
                            <ShSidebarMenuSubItem>
                                <NuxtLink to="/about/">
                                    Об организации
                                </NuxtLink>
                            </ShSidebarMenuSubItem>
                            <ShSidebarMenuSubItem>
                                <NuxtLink :to="{ path: '/about/', hash: '#documents' }">
                                    Документы
                                </NuxtLink>
                            </ShSidebarMenuSubItem>
                        </ShSidebarMenuSub>
                    </ShSidebarMenuItem>

                    <ShSidebarMenuItem>
                        <NuxtLink>
                            Обучение
                        </NuxtLink>

                        <ShSidebarMenuSub>
                            <ShSidebarMenuSubItem>
                                <NuxtLink to="/kvantums/">
                                    Направления
                                </NuxtLink>
                            </ShSidebarMenuSubItem>
                            <ShSidebarMenuSubItem>
                                <NuxtLink to="/curricula/">
                                    Учебные программы
                                </NuxtLink>
                            </ShSidebarMenuSubItem>
                        </ShSidebarMenuSub>
                    </ShSidebarMenuItem>

                    <ShSidebarMenuItem>
                        <NuxtLink to="/news/">
                            Новости
                        </NuxtLink>
                    </ShSidebarMenuItem>

                    <ShSidebarMenuItem>
                        <NuxtLink :to="{ path: $route.path, hash: '#contacts' }">
                            Контакты
                        </NuxtLink>
                    </ShSidebarMenuItem>
                </ShSidebarMenu>
            </ShSidebarGroup>
        </ShSidebarContent>
    </ShSidebar>
</template>
