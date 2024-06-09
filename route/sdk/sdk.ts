import { Router } from 'express'
import { SDKController } from 'controller'
import { PATH_SDK } from 'config'

const router = Router()

router.get(PATH_SDK.TEAM, SDKController.getAllTeam)
router.get(PATH_SDK.TEAM_STATE, SDKController.getAllTeamByState)
router.get(PATH_SDK.TEAM_ID, SDKController.getTeam)
router.get(PATH_SDK.TEAM_ABBV, SDKController.getTeamByAbbv)

router.get(PATH_SDK.PLAYER, SDKController.getAllPlayer)
router.get(PATH_SDK.PLAYER_ID, SDKController.getPlayer)
router.get(PATH_SDK.PLAYER_AWARD, SDKController.getPlayerAward)
router.get(PATH_SDK.PLAYER_CAREER, SDKController.getPlayerCareer)

router.get(PATH_SDK.DRAFT_HISTORY, SDKController.getDraftHistory)

router.get(PATH_SDK.LEADER_ALL, SDKController.getAllLeader)
router.get(PATH_SDK.LEADER_PT, SDKController.getLeaderPtTeam)
router.get(PATH_SDK.LEADER_PT_PLAYER, SDKController.getLeaderPtPlayer)
router.get(PATH_SDK.LEADER_AST, SDKController.getLeaderAstTeam)
router.get(PATH_SDK.LEADER_AST_PLAYER, SDKController.getLeaderAstPlayer)

router.get(PATH_SDK.ALL_TIME_LEADER, SDKController.getAllTimeLeader)
router.get(PATH_SDK.ALL_TIME_TOTAL, SDKController.getAllTimeTotal)

router.get(PATH_SDK.FRANCHISE_LEADER, SDKController.getAllFranchiseLeader)

/**
 * Route for SDK module
 *
 * @path {baseUrl}/sdk
 */
const sdkRoute = router
export default sdkRoute