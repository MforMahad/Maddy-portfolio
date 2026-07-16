export interface NavLink {
  id: number;
  label: string;
  href: string;

}


export const navLink: NavLink[] = [

    {id:1, label: "Work", href:"/work"},
    {id:2, label: "About", href:"/about"},
    {id:3, label: "Services", href:"/services"},
    {id:4, label: "Contact", href:"/contact"},

];
