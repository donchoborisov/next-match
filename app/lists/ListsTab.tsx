'use client'

import { Tab, Tabs } from "@nextui-org/react";
import { Member } from "@prisma/client"
import { Key } from "@react-types/shared";
import { id } from "date-fns/locale";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MemberCard from "../members/MemberCard";
import { useTransition } from "react";
import LoadingComponent from "@/components/LoadingComponent";

type Props = {
    members: Member[];
    likeIds: string[];
}


export default function ListsTab({ members, likeIds }: Props) {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();


     const tabs = [

        {id:'source', label:'Members I have liked'},
        {id:'target', label:'Members who have liked me'},
        {id:'mutual', label:'Members who have liked each other'}
        

     ];

    function handleTabChange(key: Key): void {

      startTransition(() => {

        const params = new URLSearchParams(searchParams);
        params.set('type', key.toString());
        router.replace(`${pathname}?${params.toString()}`)

      })
      

    }

  return (
    <div className="flex w-full flex-col mt-10 gap-5">
        <Tabs aria-label='Like tabs' items={tabs} color="secondary" onSelectionChange={(key) => handleTabChange(key)}>
            {(item) => (
                <Tab key={item.id} title={item.label}>
                     {isPending ? (


                           <LoadingComponent label="Loading members..."/>

                     ):(

                        <>

                        {members.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
                              {members.map(member => (
                                <MemberCard key={member.userId} member={member} likeIds={likeIds} />

                              ))}
                        </div>
                    ) : (
                        <div>no members for this filter</div>
                    )}
                        
                        </>
                          
                     )}

                  
                </Tab>
            )}

        </Tabs>
    </div>
  )
}