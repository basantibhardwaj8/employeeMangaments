// import { Router } from 'express';
// import { applyLeave, handleLeaveRequest } from '../controllers/leaveController';

// const router = Router();

// router.post('/apply', applyLeave);
// router.put('/handle', handleLeaveRequest);

// export default router;
import { Router } from 'express';
import { applyLeave, handleLeaveRequest } from '../controllers/leaveController';

const router = Router();

router.post('/apply', applyLeave);
router.put('/handle', handleLeaveRequest);

export default router;