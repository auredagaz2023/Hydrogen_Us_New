import {useState} from 'react';
import {useNavigate} from '@remix-run/react';
import babyDouble from '../../assets/Test/baby-double.png';
import babySingle from '../../assets/Test/baby-single.png';
import babyCot from '../../assets/Test/baby-cot.png';

export default function BabyScreen() {
  const [selected, setSelected] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/test-result/2', {
      state: {
        'test-index': 2,
      },
    });
  };

  return (
    <div className="bg-dark-blue h-test flex mb-24">
      <div className="flex flex-col justify-between pt-20 pb-28 items-stretch w-full lg:w-9/12">
        <div className="container">
          <div className="flex flex-col">
            <div
              className="flex justify-start items-start"
              style={{minHeight: `50vh`}}
            >
              <div className="w-24"> </div>
              <div className="text-white text-4xl w-96 font-semibold">
                Where will your baby sleep? Tell us which bed you will use the
                new mattress on.
              </div>
              <div className="flex ml-16">
                <div className="flex flex-col opacity-70 cursor-not-allowed px-2 py-3 justify-start items-center ml-4">
                  <img className="w-auto h-28" src={babyCot} alt="baby cot" />
                  <span className="text-white text-lg font-semibold mt-3">
                    Crib
                  </span>
                </div>
                <div className="flex flex-col opacity-70 cursor-not-allowed px-2 py-3 justify-start items-center ml-4">
                  <img
                    className="w-auto h-28"
                    src={babySingle}
                    alt="baby cot"
                  />
                  <span className="text-white text-lg font-semibold mt-3">
                    Baby
                  </span>
                </div>
                <div
                  className={`flex flex-col px-2 py-3 cursor-pointer justify-start items-center ml-4 ${
                    selected && 'bg-test-selected rounded-2xl'
                  }`}
                  onClick={() => setSelected(!selected)}
                >
                  <img
                    className="w-auto h-28"
                    src={babyDouble}
                    alt="baby cot"
                  />
                  <span className="text-white text-lg font-semibold mt-3">
                    Teenager
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-24 mt-20 mr-12">
            <div className="flex justify-end w-full items-center gap-8">
              <button
                className="flex border border-white text-white px-10 py-3 uppercase text-sm hover:bg-test-selected hover:border-test-selected transition-all ease-in-out disabled:opacity-70"
                onClick={handleSubmit}
                disabled={!selected}
              >
                {'Show Results'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/12 bg-cover bg-center" />
      </div>
    </div>
  );
}
