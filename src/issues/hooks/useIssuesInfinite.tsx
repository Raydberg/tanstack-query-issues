import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { State } from '../interfaces/issues.interfaces'
import { getIssues } from '../actions/get-issues'


interface Props {
    state: State
    selectedLabels: string[]
}

export const useIssuesInfinite = ({ state, selectedLabels }: Props) => {


    const issuesQuery = useInfiniteQuery({
        queryKey: ['issues', "infinite", { state, selectedLabels }],
        queryFn: ({ pageParam, queryKey }) => {
            const [, , args] = queryKey;
            //Segunda opcion de tomar argumentos si no lo paramos por el hook principal
            const { state, selectedLabels } = args as Props
            return getIssues(state, selectedLabels, pageParam)
        },
        staleTime: 1000 * 60,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => lastPage.length > 0 ? pages.length + 1 : undefined,
    })




    return {
        issuesQuery,
    }
}
