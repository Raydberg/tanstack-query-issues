import { useState } from 'react';
import { LoadingSpinner } from '../../shared/components/loading-spinner';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { State } from '../interfaces/issues.interfaces';
import { useIssuesInfinite } from '../hooks/useIssuesInfinite';

export const ListViewInfinite = () => {
  const [state, setState] = useState<State>(State.All)
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const { issuesQuery } = useIssuesInfinite({
    state: state,
    selectedLabels: selectedLabels
  })

  const onLabelSelected = (label: string) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter(l => l !== label))
    } else {
      setSelectedLabels([...selectedLabels, label])
    }
  }

  const issues = issuesQuery.data?.pages.flat() ?? []

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {
          // issuesQuery.isLoading ? <LoadingSpinner /> : <IssueList onStateChange={(state) => setState(state)} issues={issues} />
          issuesQuery.isLoading ? <LoadingSpinner /> : (
            <>

              <div className='flex justify-center flex-col'>
                <IssueList onStateChange={setState} issues={issues} state={state} />

                <button
                  onClick={() => issuesQuery.fetchNextPage()}
                  disabled={issuesQuery.isFetchingNextPage}
                  className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all'>
                  {
                    issuesQuery.isFetchingNextPage ? 'Cargando mas ' : 'Cargar mas ...'
                  }
                </button>
              </div>
            </>
          )
        }
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker onLabelSelected={onLabelSelected} selectedLabels={selectedLabels} />
      </div>
    </div>
  );
};
