import { useQuery } from "@tanstack/react-query"
import { getLabel } from "../actions/get-labels"

export const useLabel = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabel,
        staleTime: 1000 * 60 * 60, // 1 hora de staleTime
        // placeholderData: [
        //     {
        //         "id": 180616330,
        //         "node_id": "MDU6TGFiZWwxODA2MTYzMzA=",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Component:%20React%20Compiler",
        //         "name": "Component: React Compiler",
        //         "color": "bfdadc",
        //         "default": false,
        //         "description": ""
        //     } satisfies GithubLabel
        // ]
        // initialData: [
        //     {
        //         "id": 180616330,
        //         "node_id": "MDU6TGFiZWwxODA2MTYzMzA=",
        //         "url": "https://api.github.com/repos/facebook/react/labels/Component:%20React%20Compiler",
        //         "name": "Component: React Compiler",
        //         "color": "bfdadc",
        //         "default": false,
        //         "description": ""
        //     } satisfies GithubLabel
        // ]
    })


    return {
        labelsQuery
    }
}