import { useQuery } from "@tanstack/react-query"
import { getLabel } from "../actions/get-labels"

export const useLabel = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabel,
        staleTime: 1000 * 60 * 60, // 1 hora de staleTime
    
    })


    return {
        labelsQuery
    }
}