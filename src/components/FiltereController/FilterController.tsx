import { useFilter } from '../../hooks/useFilter';
import { useTodos } from '../../hooks/useTodos';
import Button from '../UI/shared/Button';

const FilterController: React.FC = () => {
  const { filterState, todoFilterHandler } = useFilter();
  const { todoAllDelete, todos, isLoading } = useTodos();

  return (
    <div>
      {!isLoading && (
        <div className="controller-container">
          <div className=" text-[18px] cursor-pointer text-[#444444]">
            <Button
              type="button"
              className={`controller-btn ${
                filterState === 'all' ? 'bg-red-600 text-white' : ''
              }`}
              onClick={() => todoFilterHandler('all')}
              btnText="All"
            />

            <Button
              type="button"
              className={`controller-btn ${
                filterState === 'pending' ? 'bg-red-600 text-white' : ''
              }`}
              onClick={() => todoFilterHandler('pending')}
              btnText="Pending"
            />

            <Button
              type="button"
              className={`controller-btn ${
                filterState === 'completed' ? 'bg-red-600 text-white' : ''
              }`}
              onClick={() => todoFilterHandler('completed')}
              btnText="Completed"
            />
          </div>
          <Button
            type="button"
            className={`clear-btn ${
              !todos.length && 'cursor-not-allowed bg-red-300 opacity-90'
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
