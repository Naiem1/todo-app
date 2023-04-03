import { useFilter } from '../../hooks/useFilter';
import { useTodos } from '../../hooks/useTodos';
import Button from '../UI/shared/Button';

const FilterController: React.FC = () => {
  const { filterState, todoFilterHandler } = useFilter();
  const { todoAllDelete, todos, isLoading } = useTodos();

  return (
    <div>
      {!isLoading && (
        <div className="border-b-2 flex justify-between items-center py-[18px] px-[25px]">
          <div className=" text-[18px] cursor-pointer text-[#444444]">
            <Button
              type="button"
              className={`my-0 mx-[8px] border hover:border-red-400 py-1 px-3 rounded-lg ${
                filterState === 'all' ? 'bg-red-600 text-white' : ''
              }`}
              onClick={() => todoFilterHandler('all')}
              btnText="All"
            />

            <Button
              type="button"
              className={`my-0 mx-[8px] border hover:border-red-400 py-1 px-3 rounded-lg ${
                filterState === 'pending' ? 'bg-red-600 text-white' : ''
              }`}
              onClick={() => todoFilterHandler('pending')}
              btnText="Pending"
            />

            <Button
              type="button"
              className={`my-0 mx-[8px] border hover:border-red-400 py-1 px-3 rounded-lg  ${
                filterState === 'completed' ? 'bg-red-600 text-white' : ''
              }`}
              onClick={() => todoFilterHandler('completed')}
              btnText="Completed"
            />
          </div>
          <Button
            type="button"
            className={`bg-red-400 border-none outline-none rounded-md text-white font-[13px] py-[7px] px-[13px] tracking-[0.3px] ${
              !todos.length && 'cursor-not-allowed bg-red-200'
            }`}
            onClick={todoAllDelete}
            disabled={!todos.length && true}
            btnText="Clear All"
          />
        </div>
      )}
    </div>
  );
};

export default FilterController;
