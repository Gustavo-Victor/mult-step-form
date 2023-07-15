export type SidebarItemProps = {
    title: string;
    description: string;
    icon: "book" | "profile" | "mail"; 
    path: string; 
    isActive: boolean; 
}